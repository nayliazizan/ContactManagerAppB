//this file arent related to this project. 
//i practice my understanding on react props
import { getImageUrl } from './utils.js';

function Profile (props) {
    return (
        <section className="profile">
        <h2>{props.name}</h2>
        <img 
            className="avatar"
            src={getImageUrl(imageId)}
            alt={name}
            width={70}
            height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {props.profession}
          </li>
          <li>
            <b>Awards: {props.awardsNum} </b> 
            ({props.awardsList})
          </li>
          <li>
            <b>Discovered: </b>
            {props.discovered}
          </li>
        </ul>
      </section>
    )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

        <Profile 
            name={"Maria Skłodowska-Curie"}
            imageId={'szV5sdG'} 
            profession={"physicist and chemist"}
            awardsNum={4}
            awardsList={"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"}
            discovered={"polonium (chemical element)"}
        />

        <Profile 
            name={"Katsuko Saruhashi"} 
            imageId={'YfeOqp2'}
            profession={"geochemist"}
            awardsNum={2}
            awardsList={"Miyake Prize for geochemistry, Tanaka Prize"}
            discovered={"a method for measuring carbon dioxide in seawater"}
        />


    </div>
  );
}


