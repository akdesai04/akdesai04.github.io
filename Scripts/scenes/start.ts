namespace scenes {
  export class Start extends objects.Scene {
    // member variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;
    private _ocean: objects.Ocean;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._ocean = new objects.Ocean();

      this._welcomeLabel = new objects.Label(
        "Group SATN",
        "60px",
        "Consolas",
        "#ffffff",
        320,
        240,
        true
      );
      this._startButton = new objects.Button("StartButton", 320, 360, true);

      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - START SCENE`);
      this.addChild(this._ocean);

      this.addChild(this._welcomeLabel);
      this.addChild(this._startButton);

      this._startButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
        },
        this
      );
    }
  }
}
