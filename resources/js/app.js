import BouncyCircle from './modules/BouncyCircle';
import Burst from './modules/Burst';
import ChainAnimation from './modules/ChainAnimation';
import CustomShape from './modules/CustomShape';
import DrawShapes from './modules/DrawShapes';
import ShapeSwirl from './modules/ShapeSwirl';
import Stagger from './modules/Stagger';
import TextAnimation from './modules/TextAnimation';
import Timeline from './modules/Timeline';
import UseCase1 from './modules/UseCase1';

class App {
  constructor() {
    BouncyCircle();
    Burst();
    ChainAnimation();
    CustomShape();
    DrawShapes();
    ShapeSwirl();
    Stagger();
    TextAnimation();
    Timeline();
    UseCase1();
  }
}

new App();
