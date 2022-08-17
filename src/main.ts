import { CombatStrategy } from "grimoire-kolmafia";
import { Macro } from "libram";

export function main(): void {
  const f = new CombatStrategy();
  f.macro(new Macro().attack());
}
