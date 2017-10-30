import { Layer } from 'common/Layer';
import { Line } from 'common/Line';
import { Path } from 'common/Path';

export class HitTestResult {
  public readonly line: Line;
  public path?: Path;
  public layer?: Layer;

  constructor(line: Line, path?: Path, layer?: Layer) {
    this.line = line;
    this.path = path;
    this.layer = layer;
  }
}
