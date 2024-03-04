import StarRating from "./Stars";
import {Button, Card, Image, MantineProvider} from "@mantine/core";


export default function CatCard({buttonCallback, name, rating, imageUrl, description})  {
  return (
      <MantineProvider>
    <Card
      shadow="sm"
      radius="md"
      style={{ width: 410 }}
    >
      <Card.Section>
        <Image
          src={imageUrl}
          alt="cute cat"
          height={300}
          width={400}
        />
      </Card.Section>
      <Card.Section>
      <h3>{name}</h3>
      <StarRating rating={rating}/>
      <p>{description}</p>
      </Card.Section>
      <Button color="blue" onClick={() => buttonCallback()}>Claim</Button>
    </Card>
        </MantineProvider>
  );
}