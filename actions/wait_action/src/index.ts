import * as core from "@actions/core";
import { wait } from "./wait.js";

export async function run(): Promise<void> {
  try {
    const ms = core.getInput("milliseconds");

    core.info(`Waiting ${ms} milliseconds`);
    core.info("That it you did it ")

    await wait(parseInt(ms, 10));

    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();