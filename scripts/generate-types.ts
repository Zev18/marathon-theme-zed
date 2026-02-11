import { writeFileSync } from "fs";
import { compile } from "json-schema-to-typescript";
import { join } from "path";

async function generateTypes() {
  const outputPath = join(__dirname, "../src/zed-theme.d.ts");

  const response = await fetch("https://zed.dev/schema/themes/v0.2.0.json");
  const schema = await response.json();

  console.log(schema);
  const types = await compile(schema, "ITheme", {
    bannerComment: "/* eslint-disable */\n// Generated from Zed theme schema",
    style: {
      singleQuote: true,
    },
  });

  writeFileSync(outputPath, types);
  console.log("✅ Theme types generated!");
}

generateTypes().catch(console.error);
