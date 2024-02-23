import Styles from "./numberdiv.module.css"
import React ,{useEffect} from "react";
const Numberdiv = () =>{
  useEffect(() => {
    // JavaScript logic to handle counting animation
    const counters = document.querySelectorAll(`.${Styles.counterValue}`);
    const speed = 3000;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className={`${Styles.greyBg} ${Styles.cNo} ${Styles.containerFluid}`}>
      <div className={Styles.container}>
        <div className={Styles.row} id={Styles.counter}>
          <div className={`col-sm-4 ${Styles.counterTxt}`}>
            Customers <span className={Styles.counterValue} data-count="10">0</span> Million
          </div>
          <div className={`col-sm-4 ${Styles.counterTxt}`}>
            Product <span className={Styles.counterValue} data-count="25">0</span> Thousand
          </div>
          <div className={`col-sm-4 ${Styles.counterTxt} ${Styles.marginBot35}`}>
            Team <span className={Styles.counterValue} data-count="150">0</span> Peoples
          </div>
        </div>
      </div>
    </div>
    );

}
export default Numberdiv;