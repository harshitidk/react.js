import Card from './card/Card';
import harshit from './assets/harshit.jpeg';
import anuj from './assets/anuj.jpeg';
import vinayak from './assets/vinayak.png';
import ayush from './assets/ayush.png';
import anish from './assets/anish.png';
import aryan from './assets/aryan.png';
import amlan from './assets/amlan.jpeg';
import sharim from './assets/sharim.jpeg';
import priyanshu from './assets/priyanshu.png';

function Rendercard() {
  const card_data = [
    {
      name: "Harshit",
      designation: "Design & Tech",
      image: harshit,
      portfolio: "https://bento.me/harshit-heya",
      link: "https://www.linkedin.com/in/harshitheya/"
    },
    {
      name: "Anuj",
      designation: "Finance & Investments",
      image: anuj,
      portfolio: "https://drive.google.com/drive/folders/1olGojevdQTRmqvb6DX14cZJ-DVaO3S3J",
      link: "https://www.linkedin.com/in/anujkumarsh/"
    },
    {
      name: "Vinayak",
      designation: "Marketing & Strategy",
      image: vinayak,
      portfolio: "https://bit.ly/PortfolioXVinayak",
      link: "https://www.linkedin.com/in/vinayak-sharma-9712bb289/"
    },
    {
      name: "Ayush",
      designation: "Management & Consulting",
      image: ayush,
      portfolio: "https://ayushportfolio-bba.vercel.app/",
      link: "https://www.linkedin.com/in/ayush-bharti-8934bb232/"
    },
    {
      name: "Anish",
      designation: "Marketing & Strategy",
      image: anish,
      portfolio: "https://sscbs-du-ac-in-dot-focus-nucleus-442213-v2.uc.r.appspot.com/?c=1ykoJh_SrSacNN4qEkq9iH06DHvwvSNXEKkODNa2MP2I&q=1863667222&r=193dd7e3f9e4e6ce&z=1734587859534&o=http%3A%2F%2Fbit.ly%2FAnish_Portfolio_This_is_the_Virus",
      link: "https://www.linkedin.com/in/anishpanditamarketing/"
    },
    {
      name: "Aryan",
      designation: "Marketing & Analyst",
      image: aryan,
      portfolio: "",
      link: "https://www.linkedin.com/in/aryan-goyal-sscbs/"
    },
    {
      name: "Priyanshu",
      designation: "Consultant & Analyst",
      image: priyanshu,
      portfolio: "https://drive.google.com/drive/u/0/mobile/folders/12Al4Wds2-OUbYMH7QGiCB8u_jZki7SwS?usp=sharing",
      link: "https://www.linkedin.com/in/priyanshu-kumar-1a29a5285/"
    },
    {
      name: "Amlan",
      designation: "Marketing & Strategy",
      image: amlan,
      portfolio: "https://bit.ly/Amlan_portfolio",
      link: "https://www.linkedin.com/in/amlan-ghosal/"
    },
    {
      name: "Sharim",
      designation: "Finance & Consulting",
      image: sharim,
      portfolio: "https://drive.google.com/drive/folders/1T81Ye_HHBxgQKApQfI0XFJ1IIKAAxD1y?usp=sharing",
      link: "https://www.linkedin.com/in/sharimmalik/"
    },
    
  ];

  return (
    <div className="list-cards">
      {card_data.map((person, index) => (
        <Card
          key={index}
          name={person.name}
          designation={person.designation}
          image={person.image}
          portfolio={person.portfolio}
          link={person.link}
        />
      ))}
    </div>
  );
}

export default Rendercard;
