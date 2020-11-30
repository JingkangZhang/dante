import './index.css';
import React, { useState } from 'react';
import { UncontrolledCarousel, Badge, UncontrolledCollapse, Card, CardBody, Container, Row, Col } from 'reactstrap';
import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Img4 from './images/4.jpg';
import Img5 from './images/5.jpg';
import Img6 from './images/6.jpg';
import Img7 from './images/7.jpg';
import Img8 from './images/8.jpg';

import sonnet from './sonnet.mp3';



const items = [
  {
    src: Img1,
    altText: 'University Library',
    header: 'University Library',
    key: '1'
  },
  {
    src: Img2,
    altText: 'Campus',
    header: 'Campus',
    key: '2'
  },
  {
    src: Img3,
    altText: 'Glade and Campanile',
    header: 'Glade and Campanile',
    key: '3'
  },
  {
    src: Img4,
    altText: 'Haas',
    header: 'Haas',
    key: '4'
  },
  {
    src: Img5,
    altText: 'Soda',
    header: 'Soda',
    key: '5'
  },
  {
    src: Img6,
    altText: 'Hills',
    header: 'Hills',
    key: '6'
  },
  {
    src: Img7,
    altText: 'Campus',
    header: 'Campus',
    key: '7'
  },
  {
    src: Img8,
    altText: 'Soda',
    header: 'Soda',
    key: '8'
  }
];

const POEM = [
  "From the dark forest to the mountain steep,",
  "I was impeded by fell beasts untamed.",
  "As I retraced my steps and still would weep,",
  "Came Virgil’s spirit whom I asked ashamed:",
  "“O Master, how hast thou come to my aid,",
  "From whence didst thou descend, thy will benign?”",
  "Thus he replied: “A heavenly dame bade ",
  "Me to thy help, with mercy most divine.”",
  "Amazed, I, as fond eyes astray would stare,",
  "Conversed with him regarding all but Beatrice.",
  "Thus he asked did I her remembrance bear:",
  "Alack, well I recalled my beauteous Beatrice,",
  "Whom I in my bland verses oft extol,",
  "My strength, my star, and savior of my soul."
];

const POEM_EXPLAIN = [
  (
  <div>"In the middle of the journey of our life, I came to myself in a <b>dark wood</b>, for the straight way was lost.
  Ah, how hard a thing it is to say what that wood was, so savage and harsh and strong that the thought of it renews my fear! ... But when I had reached<b> the foot of a hill</b>, where the valley ended that had pierced my heart with fear ... And behold, almost at <b>the beginning of the steep</b>, a leopard, light and very swift, covered with spotted fur" - Inferno Durling translation 1.1-33 passim
  <br /><br />Fun fact: I use the five fingers on my left hand to ensure each line I write is iambic pentameter.  </div>
  ),
  (<div>"And behold, almost at the beginning of the steep,<b> a leopard</b>, light and very swift, covered with spotted fur; and it did not depart from before my face but rather so <b>impeded my way</b> that I was at several turns turned to go back." - Inferno Durling translation 1.31-6
  <br /><br /> Fun fact: When I read what I write, I sound like a "di dum di dum" robot.</div>),
  (<div>"And behold, almost at the beginning of the steep, a leopard, light and very swift, covered with spotted fur; and it did not depart from before my face but rather so impeded my way that <b>I was at several turns turned to go back.</b>" - Inferno Durling translation 1.31-6
  <br /><br />Fun fact: Cary and Longsfellow's translations of <em>Inferno</em> are in blank verse (which are much better than my verse). I borrowed certain words from them, such as "retrace".</div>),
  (<div>"While I was falling down into a low place, before my eyes one had offered himself to me who through long silence seemed hoarse. When I saw him in the great wilderness, "Miserere —on me," I cried to him, "whatever you may be, whether shade or true man!"
  He replied: "<b>Not a man, I was formerly a man</b>, and my parents were Lombards, Mantuans both by birth. ... "<b>Now are you that Virgil</b>, that fountain which spreads forth so broad a river of speech?" I replied with <b>shamefast brow</b>." - Inferno Durling translation 1.61-81 passim
  <br /><br />Fun fact: In <em>Vita Nuova</em>, where Dante records his poems, he would give the background for each poem he wrote and point out the structure of his poems.</div>),
  (<div>"<b>You are my master</b> and my author, you alone are he from whom I have taken the pleasing style that has won me honor.

  See the beast for which I have turned back: <b>help me against her</b>, famous sage, for she makes my veins and pulses tremble." - Inferno Durling translation 1.85-90

   </div>),
  (<div>"I will tell you why I came and what I heard in the first moment when I grieved for you.

  <b>I was among those who are suspended</b>, and a lady called me, so blessed and beautiful that I begged her to command me." - Inferno Durling Translation 2.49-54

    </div>),
  (<div>"I was among those who are suspended, and <b>a lady called me, so blessed and beautiful</b> that I begged her to command me. Her eyes were shining brighter than the morning star; and she began to speak gently and softly, with angelic voice, in her language:
" - Inferno Durling translation 2.52-57

<br /><br />Fun Facts: The conversation between Dante and Virgil is written by me so it does not correspond to the original text in <em>Inferno</em>. </div>),
  (<div>
  'O courteous Mantuan soul, whose fame still lasts in the world and will last as far as the world will go,

  <b>my friend, not the friend of fortune, on the deserted shore is so blocked in his journey that he has turned back for fear</b>;

  and I am afraid that he may be already so lost that I have risen too late to help him, according to what I have heard of him in Heaven.

  <b>Now go, and with your ornamented speech and whatever else is needed for his escape help him so that I may be consoled.</b>" - Inferno Durling translation 2.58-69
</div>),
  (<div>

Fun fact: The rhyming scheme is "ABAB CDCD EFEF GG". Shakespeare used it a lot. </div>),
  (<div>
    Interestingly, after Virgil first implicitly mentions Beatrice in Inferno Durling translation 1.121-3: "To whom then if you shall wish to rise, there will be <b>a soul more worthy of that than I</b>; with <b>her</b> I shall leave you when I depart;", Dante does not spring to his feet. Instead, he talks in long and convoluted sentences as the alibi for his cowardice: "I began: "Poet who are my guide, consider my strength, if it is powerful enough, before you entrust me to the deep pass.

You say that the father of Silvius, still in corruptible flesh, went to the immortal realm and was there with his senses.

Therefore, if the adversary of all evil was liberal to him, considering the high effect that was to come forth from him, and who and what he was,

it does not seem unworthy to a man of intellect; for he in the Empyrean heaven had been chosen to be father of mother Rome and her empire:

and Rome and her empire, to tell the truth, were established to be the holy place where the successor of great Peter is enthroned.

Through this journey that you claim for him, he understood things that were the cause of his victory and of the papal mantle.

Later the chosen Vessel went there, to bring back strengthening for that faith which is the beginning of the way of salvation. <b>But I, why come there?</b> or who grants it? I am not Aeneas, I am not Paul; <b>neither I nor others believe me worthy of that.</b>

Therefore, if I abandon myself to the journey, I fear lest my coming may be folly. You are wise, you understand better than I speak." 2.10-36
     </div>),
  (<div>Fun Fact: He didn't actually ask.</div>),
  (<div>Fun Fact: This line and the line that rhymes with it both have eleven syllables, aka, the feminine ending. There are fewer words more feminine than "Beatrice" to be a feminine ending. </div>),
  (<div> Yep, "extolled" in his <em>Vita Nuova</em>. But sorry, I didn't mean to say his verses are "bland". I meant if I were Dante and had written all the poems, they'd be bland. {":)"}

    <br /><br />Fun fact: Telling a story in a sonnet is less usual than discussing a topic or developing an idea. Thus, there isn't really a volta (a turn) in this sonnet, though I tried to get a little fancier in the last couplet.</div>),
 (<div>

 Fun fact: I used the alliteration of "s" in this line.</div>),

];

const App = () => {
  const [poemExplain, setPoemExplain] = useState("");
  const [currLine, setCurrLine] = useState(-1);

  const handleHover = (index) => {
    console.log("hi");
    setPoemExplain(POEM_EXPLAIN[index]);
    setCurrLine(index);
  }

  const handleClick = () => {
    setCurrLine(-1);
  }

  return (
    <div className="App">
      <div className="topbar">
        <span className="title h3">Dante's Inferno Creative Project</span>
        <span className="authors"><a href="https://jingkangzhang.com" target="_blank">Jingkang Zhang</a>
          <br />
          <a href="https://mandizhao.github.io/" target="_blank">Mandi Zhao</a>
        </span>
      </div>

      <div className="carousel-container">
        <h4 className="gallery-title">Infernal Berkeley<Badge className="info" id="toggler1" color="secondary">Info</Badge></h4>
        <UncontrolledCollapse toggler="#toggler1">
          <Card className="gallery-info">
            <CardBody>
            A visualization of our sentiments from reading Inferno projected on common Berkeley scenes. Taking advantage of recent progress in neural style transfer in computer vision, we borrow a recent approach proposed by “Image Style Transfer Using Convolutional Neural Networks” (link), which takes in two images as sources for “style” and “content”, and performs synthesis of a new “target” image — in our case, “style” would be the different Inferno illustration we gathered online, also including the rendering of an Inferno-themed game, and “content” is scenery photos from various Berkeley locations. Images by Jingkang, Mandi, or from the internet. Style transfer performed by Mandi.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        <UncontrolledCarousel
          pause="hover"
          items={items} />


      </div>
      <div className="poem-container">

        <Container className="poem-exp-container">
        <h4 className="gallery-title">Sonnet<Badge className="info" id="toggler2" color="secondary">Info</Badge></h4>
        <audio src={sonnet} controls />
        <UncontrolledCollapse toggler="#toggler2">
          <Card className="gallery-info">
            <CardBody>
              A Shakespearean sonnet roughly corresponding to the first two cantos of <em>Inferno</em>. Written by Jingkang. Read by Mandi.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
          <Row>
            <Col sm="12" md="6" className="poem">
              {POEM.map((v, i) =>
                (
                  <div className={"poem-line" + (i === currLine ? " curr-line" : "")}
                    onMouseOver={() => handleHover(i)}
                    >
                    {v}
                  </div>)
              )}
            </Col>
            <Col md="6" className="poem-explain">
              {poemExplain}
            </Col>
          </Row>

        </Container>
      </div>

    </div>
  );
}

export default App;
