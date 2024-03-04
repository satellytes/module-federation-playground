import React, { useState, useEffect } from 'react';
import { Grid } from "@mantine/core";

const CatCard = React.lazy(() => import('remote/CatCard'));

const catNameList = [
	"Abby",
	"Angel",
	"Annie",
	"Baby",
	"Bailey",
	"Bandit",
	"Bear",
	"Bella",
	"Bob",
	"Boo",
	"Boots",
	"Bubba",
	"Buddy",
	"Buster",
	"Cali",
	"Callie",
	"Casper",
	"Charlie",
	"Chester",
	"Chloe",
	"Cleo",
	"Coco",
	"Cookie",
	"Cuddles",
	"Daisy",
	"Dusty",
	"Felix",
	"Fluffy",
	"Garfield",
	"George",
	"Ginger",
	"Gizmo",
	"Gracie",
	"Harley",
	"Jack",
	"Jasmine",
	"Jasper",
	"Kiki",
	"Kitty",
	"Leo",
	"Lilly",
	"Lily",
	"Loki",
	"Lola",
	"Lucky",
	"Lucy",
	"Luna",
	"Maggie",
	"Max",
	"Mia",
	"Midnight",
	"Milo",
	"Mimi",
	"Miss kitty",
	"Missy",
	"Misty",
	"Mittens",
	"Molly",
	"Muffin",
	"Oliver",
	"Oreo",
	"Oscar",
	"Patches",
	"Peanut",
	"Pepper",
	"Precious",
	"Princess",
	"Pumpkin",
	"Rascal",
	"Rocky",
	"Sadie",
	"Salem",
	"Sam",
	"Samantha",
	"Sammy",
	"Sasha",
	"Sassy",
	"Scooter",
	"Shadow",
	"Sheba",
	"Simba",
	"Simon",
	"Smokey",
	"Snickers",
	"Snowball",
	"Snuggles",
	"Socks",
	"Sophie",
	"Spooky",
	"Sugar",
	"Tiger",
	"Tinkerbell",
	"Toby",
	"Trouble",
	"Whiskers",
	"Willow",
	"Zoe",
	"Zoey"
]

export const Claimable = () => {
  const [cards, setCards] = useState(new Array(9).fill(0).map((_, index) => index));
  const [catImages, setCatImages] = useState([]);
  const [catRatings, setCatRatings] = useState([]);
  const [catNames, setCatNames] = useState([]);

  const handleCardClick = (index) => {
    setCards(cards.filter(card => card !== index));
  }

  const fetchCatImages = async () => {
    const images = await Promise.all(cards.map(async () => {
      const response = await fetch('https://cataas.com/cat?json=true');
      const data = await response.json();
      return "https://cataas.com/cat/"+data._id;
    }));
    setCatImages(images);
  }

  useEffect(() => {
    fetchCatImages();
    setCatRatings(cards.map(() => Math.floor(Math.random() * 5) + 1));
    setCatNames(cards.map(() => catNameList[Math.floor(Math.random() * catNameList.length)]));
  }, []);

  const [span, setSpan] = useState(1);

  useEffect(() => {
    const calculateSpan = () => {
      const cardWidth = 400;
      const viewportWidth = window.innerWidth;
      const cardsPerRow = Math.floor(viewportWidth / cardWidth);
      const totalColumns = 15;
      const calculatedSpan = totalColumns / cardsPerRow;
      setSpan(calculatedSpan);
    };

    calculateSpan();

    window.addEventListener('resize', calculateSpan);

    return () => {
      window.removeEventListener('resize', calculateSpan);
    };
  }, []);

  return (
    <Grid gutter="md" style={{ display: 'flex', justifyContent: 'center' , width: "90vw", paddingLeft:"10vw"}}>
      {cards.map((index, i) => (
        <Grid.Col span={span} key={index}>
					<React.Suspense fallback={<div>Loading...</div>}>
						<CatCard
            buttonCallback={() => handleCardClick(index)}
            rating={catRatings[i]}
            imageUrl={catImages[i]}
            name={catNames[i]}
            description="This is a cute cat"
          />
					</React.Suspense>
        </Grid.Col>
      ))}
    </Grid>
  )
}