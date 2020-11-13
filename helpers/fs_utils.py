import os
from typing import List


def folders_in_dir(directory: str = ".") -> List[str]:
    folders = [f for f in os.listdir(directory) if os.path.isdir(f)]
    return folders


def prefix_folders_in_directory(folders: List[str], prefix: str = "_") -> None:
    for folder_name in folders:
        os.rename(folder_name, f"{prefix}{folder_name}")
