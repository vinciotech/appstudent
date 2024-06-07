import { Skin as WelcomeSkinDef } from "./WelcomeSkinDef";
import { Skin as WelcomeSkinMui } from "./WelcomeSkinMui";
import { Skin as StudentListSkinDef } from "./StudentListSkinDef";
import { Skin as StudentListSkinMui } from "./StudentListSkinMui";
import { Skin as StudentFormSkinDef } from "./StudentFormSkinDef";
import { Skin as StudentFormSkinMui } from "./StudentFormSkinMui";
import { Skin as NavigationBarSkinDef } from "./NavigationBarSkinDef";
import { Skin as NavigationBarSkinMui } from "./NavigationBarSkinMui";
import { Skin as UserComponentSkinDef } from "./UserComponentSkinDef";
import { Skin as UserComponentSkinMui } from "./UserComponentSkinMui";
import { Skin as ConfigAppSkinDef } from "./ConfigAppSkinDef";
import { Skin as ConfigAppSkinMui } from "./ConfigAppSkinMui";
import { Skin as GlobalDialogSkinDef } from "./GlobalDialogSkinDef";
import { Skin as GlobalDialogSkinMui } from "./GlobalDialogSkinMui";

const skins = {
  Def: {
    WelcomeSkin: WelcomeSkinDef,
    StudentListSkin: StudentListSkinDef,
    StudentFormSkin: StudentFormSkinDef,
    NavigationBarSkin: NavigationBarSkinDef,
    UserComponentSkin: UserComponentSkinDef,
    ConfigAppSkin: ConfigAppSkinDef,
    GlobalDialogSkin: GlobalDialogSkinDef,
  },
  Mui: {
    WelcomeSkin: WelcomeSkinMui,
    StudentListSkin: StudentListSkinMui,
    StudentFormSkin: StudentFormSkinMui,
    NavigationBarSkin: NavigationBarSkinMui,
    UserComponentSkin: UserComponentSkinMui,
    ConfigAppSkin: ConfigAppSkinMui,
    GlobalDialogSkin: GlobalDialogSkinMui,
  },
};

export function getSkins(theme) {
  return skins[theme];
}
