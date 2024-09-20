import os

def print_file_content(file_path):
    """Prints the content of a file with a formatted header.

    Args:
        file_path (str): The path to the file.
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    print(f"文件名：{file_path}\n文件内容：\n{content}\n\n")

def main():
    """Main function to read and print file contents."""
    file_list = [
    "remix-cf/app/root.tsx",
    "remix-cf/app/styles/tailwind.css",
    "remix-cf/app/routes/index.tsx",
    "remix-cf/app/routes/software.$id.tsx",
    "remix-cf/app/components/SoftwareCard.tsx",
    "remix-cf/tailwind.config.ts",
    "remix-cf/README.md",
    "remix-cf/tsconfig.json",
    "remix-cf/postcss.config.js",
    "remix-cf/.eslintrc.cjs",
    "remix-cf/package.json",
    "remix-cf/public/routes.json",
    "remix-cf/.gitignore",
    "remix-cf/public/headers",
    "remix-cf/vite.config.ts",
    "remix-cf/functions/[[path]].ts",
    "remix-cf/worker-configuration.d.ts",
    "remix-cf/load-context.ts",
    "remix-cf/wrangler.toml"
    ]

    with open("output.txt", "w", encoding="utf-8") as output_file:
        for file_path in file_list:
            try:
                print_file_content(file_path)
                # 将输出同时写入到文件
                output_file.write(f"文件名：{file_path}\n")
                with open(file_path, "r", encoding="utf-8") as f:
                    output_file.write(f"文件内容：\n{f.read()}\n\n")
            except FileNotFoundError:
                print(f"文件未找到: {file_path}")

if __name__ == "__main__":
    main()