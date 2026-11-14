#!/usr/bin/env python3
"""Bundle relevant Astro project source and configuration files into a single text file."""

from pathlib import Path

# Directories to skip entirely
IGNORED_DIRS = {
    ".git",
    ".astro",
    "node_modules",
    "dist",
    "build",
    "__pycache__",
    ".pytest_cache",
    ".venv",
    "venv",
    ".idea",
    ".vscode",
    ".husky",
    "_",  # Skips Husky's auto-generated .husky/_/ internal shims
}

# Explicitly ignore non-text, media, state, backup, and lockfiles
IGNORED_EXTENSIONS = {
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".svg",
    ".ico",
    ".gif",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
    ".docx",
    ".xlsx",
    ".pdf",
    ".zip",
    ".tar",
    ".gz",
    ".pyc",
    ".pyo",
    ".so",
    ".dylib",
    ".dll",
    ".exe",
    ".bin",
    ".lock",
    ".tfstate",
    ".backup",
}

IGNORED_FILENAMES = {
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    ".DS_Store",
    "combine.py",
    "list_files.py",
    "directory_files.txt",
    "repo_dump_all.txt",
    "project_dump.txt",
    "AGENTS.md",
    "README.md",
    ".env",
    ".env.production",
    ".env.local",
    ".gitignore"
}

# Skip unexpectedly large files
MAX_FILE_SIZE_BYTES = 512 * 1024  # 512 KB


def is_binary_file(path: Path) -> bool:
    """Detect binary files by checking for null bytes in the initial chunk."""
    try:
        with open(path, "rb") as f:
            chunk = f.read(8192)
        return b"\x00" in chunk
    except OSError:
        return True


def is_candidate_file(path: Path) -> bool:
    """Check whether a file should be included based on name, extension, and size."""
    if path.name in IGNORED_FILENAMES or path.name.startswith(".env."):
        return False
    if path.suffix.lower() in IGNORED_EXTENSIONS:
        return False
    if path.stat().st_size > MAX_FILE_SIZE_BYTES:
        return False
    if is_binary_file(path):
        return False
    return True


def collect_and_dump(
    root_dir: str = ".", output_file: str = "repo_dump_all.txt"
) -> None:
    root = Path(root_dir).resolve()
    out_path = Path(output_file).resolve()

    count = 0
    with open(out_path, "w", encoding="utf-8") as out:
        for path in sorted(root.rglob("*")):
            if path.resolve() == out_path:
                continue

            if path.is_dir() or any(
                part in IGNORED_DIRS for part in path.parts
            ):
                continue

            if not is_candidate_file(path):
                continue

            rel_path = path.relative_to(root)

            try:
                content = path.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                print(f"Skipping non-UTF-8 file: {rel_path}")
                continue
            except Exception as e:
                print(f"Skipping {rel_path} due to read error: {e}")
                continue

            separator = "=" * 80
            out.write(f"\n{separator}\n")
            out.write(f"FILE: {rel_path}\n")
            out.write(f"{separator}\n\n")
            out.write(content)
            if not content.endswith("\n"):
                out.write("\n")

            count += 1
            print(f"Added: {rel_path}")

    size_mb = out_path.stat().st_size / (1024 * 1024)
    print(f"\nDone! Extracted {count} files into: {out_path} ({size_mb:.2f} MB)")


if __name__ == "__main__":
    collect_and_dump(root_dir=".", output_file="repo_dump_all.txt")