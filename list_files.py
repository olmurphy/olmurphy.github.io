from pathlib import Path

# Directories and file names/patterns to skip
EXCLUDED_DIRS = {
    ".git",
    "node_modules",
    "__pycache__",
    ".pytest_cache",
    ".venv",
    "venv",
    "dist",
    "build",
    ".husky",
    ".astro",
}

EXCLUDED_FILES = {
    ".DS_Store",
    "gathered_contents.txt",
    "directory_files.txt",
    "list_files.py"
}


def should_skip(path: Path) -> bool:
  # Check if any parent directory is in the excluded set
  if any(part in EXCLUDED_DIRS for part in path.parts):
    return True
  # Check filename
  if path.name in EXCLUDED_FILES:
    return True
  return False


def list_files_to_output(output_filepath: str = "directory_files.txt"):
  """Scans the current directory recursively for meaningful files,

  excluding VCS internals, cache directories, and generated dumps.
  """
  current_dir = Path(".")
  target_file = Path(output_filepath).resolve()

  collected = []
  for f in current_dir.rglob("*"):
    try:
      if f.is_file() and f.resolve() != target_file and not should_skip(f):
        collected.append(f)
    except (PermissionError, FileNotFoundError):
      continue

  # Case-insensitive alphanumeric sort by relative path
  files = sorted(collected, key=lambda p: str(p).lower())

  with open(output_filepath, "w", encoding="utf-8") as out:
    out.write(f"Recursive file listing in: {current_dir.resolve()}\n")
    out.write("=" * 80 + "\n")
    out.write(f"{'File Path':<65} {'Size':>12}\n")
    out.write("-" * 80 + "\n")

    for f in files:
      try:
        rel_path = f.relative_to(current_dir)
        size_kb = f.stat().st_size / 1024
        out.write(f"{str(rel_path):<65} {size_kb:>9.2f} KB\n")
      except (PermissionError, FileNotFoundError):
        continue

    out.write("=" * 80 + "\n")
    out.write(f"Total files: {len(files)}\n")

  print(f"Directory listing saved to: {output_filepath}")


if __name__ == "__main__":
  list_files_to_output()