import { watch } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { homedir } from "os";
import { join } from "path";

const ZED_THEMES_PATH = join(
  homedir(),
  ".config",
  "zed",
  "themes",
  "marathon.json",
);
const EXPORT_PATH = join(__dirname, "..", "themes", "marathon.json");

async function ensureDir(path: string) {
  try {
    await mkdir(path, { recursive: true });
  } catch (error) {
    // Directory already exists
  }
}

const args = process.argv.slice(2);
const shoudWriteToSystem = args.includes("--dev") || args.includes("-d");

async function build() {
  const { theme: themeJson } = await import(`./theme.ts?update=${Date.now()}`);
  try {
    await ensureDir(join(ZED_THEMES_PATH, ".."));
    await ensureDir(join(EXPORT_PATH, ".."));

    await writeFile(EXPORT_PATH, JSON.stringify(themeJson, null, 2));
    console.log(`✅ Theme written to ${EXPORT_PATH}`);

    if (shoudWriteToSystem) {
      await writeFile(ZED_THEMES_PATH, JSON.stringify(themeJson, null, 2));
      console.log(`✅ Theme written to ${ZED_THEMES_PATH}`);
    }
  } catch (error) {
    console.error("❌ Build failed:", error);
  }
}

// Build immediately
build();

const shouldWatch = args.includes("--watch") || args.includes("-w");

if (shouldWatch) {
  console.log("👀 Watch mode enabled, monitoring for changes...");

  const WATCH_FILE_PATH = join(__dirname, "theme.ts");

  // Watch for changes
  watch(WATCH_FILE_PATH, async (eventType) => {
    if (eventType === "change") {
      console.log("🔄 Change detected, rebuilding...");
      delete require.cache[require.resolve(WATCH_FILE_PATH)];
      try {
        await build();
      } catch (error) {
        console.error("❌ Build error (watch will continue):", error);
      }
    }
  });
} else {
  console.log("Build complete. Use --watch or -w to enable watch mode.");
}
