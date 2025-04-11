#!/bin/bash

# 1. Check if the version argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <version_number>"
  exit 1
fi

MAJOR_VERSION="$1"

# 2. Check if the major version is an integer
if ! [[ "$MAJOR_VERSION" =~ ^[0-9]+$ ]]; then
  echo "Error: Version must be an integer."
  exit 1
fi

VERSION="$MAJOR_VERSION.0.0"

# 3. Update package.json (optional, but recommended)
echo "Updating package.json..."
npm version "$VERSION"

# 4. Tag the commit in the main branch
echo "Tagging the commit..."
git tag "v$VERSION"
git push origin "v$VERSION"

echo "Version $VERSION tagged successfully!"