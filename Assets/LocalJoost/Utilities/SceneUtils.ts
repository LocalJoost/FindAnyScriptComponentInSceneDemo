import { findAllScriptComponentsInChildren } from "SpectaclesInteractionKit.lspkg/Utils/SceneObjectUtils";
import { DEFAULT_MAX_CHILD_SEARCH_LEVELS } from "SpectaclesInteractionKit.lspkg/Utils/SceneObjectUtils";

export function findAllScriptComponentsInScene<T extends ScriptComponent>(
  scriptClass: new (...args: any[]) => T,
  maxDepth: number = DEFAULT_MAX_CHILD_SEARCH_LEVELS): T[] | null {
    const foundComponents: T[] = [];
    const rootCount = global.scene.getRootObjectsCount();
    try {
        for (let i = 0; i < rootCount; i++) {
            const so = global.scene.getRootObject(i);
            const components = findAllScriptComponentsInChildren<T>(so, scriptClass, maxDepth);
            if (components && components.length > 0) {
                foundComponents.push(...components);
            }
        }
        return foundComponents.length > 0 ? foundComponents : null;
    } catch (error) {
        print("Error while searching for components in scene: " + error);
        return null;
    }
}
