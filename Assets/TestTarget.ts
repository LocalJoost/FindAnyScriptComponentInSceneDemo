@component
export class TestTarget extends BaseScriptComponent {

    public getInfo(): string {
        return "I am a TestTarget component on " + this.getSceneObject().name + "!";
    }
}
