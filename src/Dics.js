import green_1 from './assets/green_1.png';
import green_2 from './assets/green_2.png';
import green_3 from './assets/green_3.png';
import green_4 from './assets/green_4.png';
import green_5 from './assets/green_5.png';
import green_6 from './assets/green_6.png';
import green_7 from './assets/green_7.png';
import green_8 from './assets/green_8.png';
import green_9 from './assets/green_9.png';

import red_1 from './assets/red_1.png';
import red_2 from './assets/red_2.png';
import red_3 from './assets/red_3.png';
import red_4 from './assets/red_4.png';
import red_5 from './assets/red_5.png';
import red_6 from './assets/red_6.png';
import red_7 from './assets/red_7.png';
import red_8 from './assets/red_8.png';
import red_9 from './assets/red_9.png';

const Dics = ({color, historyLast}) => {
    const DicsImg = {
        green: [green_1,green_2,green_3,green_4,green_5,green_6,green_7,green_8,green_9],
        red: [red_1,red_2,red_3,red_4,red_5,red_6,red_7,red_8,red_9]
    }

    let src = DicsImg[color][historyLast - 1];
    let alt = `${color} ${historyLast}`
      
    return(
        <>
            <img src={src} alt={alt} />
        </>
    )
}

export default Dics;