import scroll from "../../resources/scrolldown.gif";
import React, { forwardRef } from "react";
import styles from "./firstdiv.module.css";
import { useNavigate } from "react-router-dom";

const firstdiv = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const scrollToAbt = () => {
    navigate("/about");
  };

  return (
    <section ref={ref.homeRef}>
      <div className={styles.parallax}>
        <div className={styles.container}>
          <div className={styles.overlay}>
            <div className={styles.verticallycenterd}>
              <div className={styles.verticallycenterd1}>
                <div className={styles.main_text_font}>
                  Engineering Solutions
                  <br />
                  <div className={styles.sub_main_text_font}>
                    for a Better World
                  </div>
                </div>
              </div>
            </div>
            <div onClick={scrollToAbt}>
              <img className={styles.scrollStyle} src={scroll} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
export default firstdiv;
