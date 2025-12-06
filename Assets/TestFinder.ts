import { findAllScriptComponentsInScene } from "LocalJoost/Utilities/SceneUtils";
import { TestTarget } from "TestTarget";

@component
export class TestFinder extends BaseScriptComponent {
    onAwake() {
        const foundTargets = findAllScriptComponentsInScene<TestTarget>(TestTarget);
        if (foundTargets) {
            for (const target of foundTargets) {
                print(target.getInfo());
            }
        }
    }
}
