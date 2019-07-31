import BouncyCircle from './modules/BouncyCircle';
import Burst from './modules/Burst';
import ChainAnimation from './modules/ChainAnimation';
import CustomShape from './modules/CustomShape';
import DrawShapes from './modules/DrawShapes';
import ShapeSwirl from './modules/ShapeSwirl';
import Stagger from './modules/Stagger';
import Timeline from './modules/Timeline';

class App {
  constructor() {
    BouncyCircle();
    Burst();
    ChainAnimation();
    CustomShape();
    DrawShapes();
    ShapeSwirl();
    Stagger();
    Timeline();
  }
}

new App();
