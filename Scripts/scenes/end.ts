namespace scenes {
  export class End extends objects.Scene {
    // member variables
    private _endLabel: objects.Label;
    private _backButton: objects.Button;
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

      this._endLabel = new objects.Label(
        "Game Over!",
        "60px",
        "Consolas",
        "#000000",
        320,
        240,
        true
      );
      this._backButton = new objects.Button("BackButton", 320, 360, true);

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
      console.log(`Starting - END SCENE`);
      this.addChild(this._ocean);
      this.addChild(this._endLabel);
      this.addChild(this._backButton);

      this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
      this._backButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.PLAY;
        },
        this
      );
    }
  }
}
