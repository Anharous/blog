import Image from "next/image";
import Data from "../data.json"
import "./page.css"


export default function Home() {
  const numbers = Data.numcontainer
  const conclusions = Data.conclusion
  const shares = Data.share
  const profiles = Data.read_next
  const sidebars = Data.side_bar

  return (
    <div className="whole-container">
    <div className="sub-whole-container">
    <div className="details-left">
      <div className="details-one">
        <h4 className="insurance">Insurance</h4>
        <h2>Expert raises $13 billion global private equity fund</h2>
        <p>Across its target sectors and regions, Experts will seek to invest in well-positioned companies with the potential for further operational improvement and partner with management teams to create value through revenue and earnings growth. </p>
        <div className="head-profile">
          <div className="head-prof-sub">
          <Image src="/profile.svg" alt="profile pic" width={32} height={32}/>
          <div className="head-prof-details">
            <h2>Heisenberg</h2>
            <p>Business analyst</p>
          </div>
          </div>
          <p>June 24, 2024</p>
        </div>
      </div>
      <Image src="/headpic.svg" alt="buildings" width={920} height={520}/>
      <div className="head-img-para">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, <span>adipisci velit,</span> sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>
      <div className="traslation-container">
        <h1>1914 translation by H. Rackham</h1>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <div>
          <Image src="translation-one.svg" alt="family-pic" width={920} height={280} />
          <div>
            <Image src="translation-two.svg" alt="family-pic" width={452} height={240} />
            <Image src="translation-three.svg" alt="family-pic" width={452} height={240} />
          </div>
        </div>
      </div>
      <div className="number-container">
        {numbers.map((number,index) =>(
          <div key={index} className="number-box">
            <Image src={number.image} alt="one" width={106} height={106}/>
            <p>{number.para}</p>
          </div>
        ))}
      </div>
      <div className="conclusion-container">
          <h1>Conclusion</h1>
          <p>In conclusion, AI data analytics represents a paradigm shift in the way organizations harness the power of data to drive innovation and gain a competitive edge. By leveraging cloud-based data management, synchronizing data systems, adopting advanced processing techniques, integrating disparate datasets, visualizing insights, and automating data extraction, businesses can unlock the full potential of their data assets.</p>
          {conclusions.map((conclusion, index) =>(
          <div key={index}>
            <ul>
              <li>{conclusion.link}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="share-container">
          <div>
            <p>Share</p>
          </div>
        {shares.map((share,index) =>(
          <div key={index} className="share-box">
              <Image src={share.icon} alt="icon" width={16} height={16} />
              <button className="share-button">{share.name}</button>
          </div>
        ))}
      </div>
      </div>
      <div className="side-bar">
      {sidebars.map((sidebar,index)=>(
        <div key={index}>
          <p>{sidebar.name}</p>
        </div>
      ))}
    </div>
    </div>
      <div className="read-container">
        <h4 className="read-more-text">READ NEXT</h4>
        <div className="read-item">
        {profiles.map((profile,index) =>(
          <div key={index} className="read-item-box">
            <Image src={profile.img} alt="profile" width={404} height={240}/>
            <h4 className="insurance">{profile.title}</h4>
            <h3>{profile.heading}</h3>
            <p>{profile.para}</p>
            <div className="read-prof">
              <div className="read-prof-sub">
              <Image src={profile.img_two} alt="man" width={32} height={32}/>
              <div className="read-prof-details">
                <h2>{profile.img_name}</h2>
                <p>{profile.img_desc}</p>
              </div>
              </div>
              <p>{profile.date}</p>
            </div>

          </div>
        ))}
        </div>
      </div>
      </div>
    
    
    
  );
}
