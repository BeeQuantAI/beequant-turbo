#!/bin/bash

echo "Checking code format based on .prettierrc rules..."

# Gather all staged .ts and .tsx files in src and test directories
FILES_TO_FORMAT=$(git diff --cached --name-only --diff-filter=d | grep -E "^(src|test)/.*\.(ts|tsx)$")

if [[ -n "$FILES_TO_FORMAT" ]]; then
    NEEDS_FORMATTING=""

    for file in $FILES_TO_FORMAT; do
        # Check the current format of the file using the format:check script
        yarn format:check "$file"
        if [ $? -ne 0 ]; then
            # File needs formatting
            NEEDS_FORMATTING+="$file "
        fi
    done

    if [[ -n "$NEEDS_FORMATTING" ]]; then
        echo "To be committed files that need formatting:"
        echo "#########################"
        echo "$NEEDS_FORMATTING"
        echo "#########################"

        # Format files that need formatting
        for file in $NEEDS_FORMATTING; do
            echo "Formatting file: $file"
            yarn format "$file"
            # Add formatted file to staging
            git add "$file"
            echo "$file has been reformatted and re-staged."
        done

        echo "All format issues have been corrected and necessary files re-staged."
    else
        echo "All files are properly formatted."
    fi
else
    echo "No .ts or .tsx files in 'src' or 'test' directories need checking."
fi
