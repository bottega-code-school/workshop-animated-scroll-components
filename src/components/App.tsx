import * as React from "react";
import Layout from "./Layout";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Element, Link } from "react-scroll";
import {
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";

const SCROLL_OFFSET = 0;
const SCROLL_SPEED = 1000;
const nums = Array.from(Array(10).keys());

const App = () => {
  return (
    <Layout>
      <div className="content__blocks">
        {nums.map((num) => (
          <Element
            key={num}
            name={num.toString()}
            style={{ height: "calc(100vh - 150px)", paddingTop: "150px" }}
          >
            <AnimationOnScroll
              animateIn="animate__backInRight"
              animateOut="animate__backOutRight"
              animateOnce={false}
            >
              <div key={num} className="content__block">
                <div className="content__block__actions">
                  {num !== 0 ? (
                    <Link
                      style={{ cursor: "pointer" }}
                      className="content__block__actions--item"
                      to={(num - 1).toString()}
                      offset={SCROLL_OFFSET}
                      duration={SCROLL_SPEED}
                      spy
                      smooth
                    >
                      <BsFillArrowUpSquareFill />
                    </Link>
                  ) : (
                    <div className="content__block__actions--item" />
                  )}

                  {num !== nums.length - 1 ? (
                    <Link
                      style={{ cursor: "pointer" }}
                      className="content__block__actions--item"
                      to={(num + 1).toString()}
                      offset={SCROLL_OFFSET}
                      duration={SCROLL_SPEED}
                      spy
                      smooth
                    >
                      <BsFillArrowDownSquareFill />
                    </Link>
                  ) : (
                    <div className="content__block__actions--item" />
                  )}
                </div>
                <div>
                  <h1>Block {num}</h1>
                  <p>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Maecenas
                    sed diam eget risus varius blandit sit amet non magna. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                  </p>
                </div>
              </div>
            </AnimationOnScroll>
          </Element>
        ))}
      </div>
    </Layout>
  );
};

export default App;
