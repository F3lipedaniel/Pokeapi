import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard({name, image, types}) {
  
  const typeHandler = () => {
    if(types[1]) {
      return types[0].type.name +" "+ types[1].type.name;
    }
    return types[0].type.name;
  };
  
  return (
    <Card sx={{ maxWidth: 345, }}>
      <CardMedia
        sx={{ height: 245 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} 
        </Typography>
        <Typography variant="body2" component="p" sx={{
              p: {
                backgroundImage: types.some(
                  (type) => type.type.name === 'ground'
                ) 
                  ? 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)'
                  : types.some(
                    (type) => type.type.name === "grass" && "poison"
                  )
                ? 'linear-gradient(90deg, #9bcc50 14.5%, #b97fc9 14.5%, #b97fc9 35%, #fff 00%)'
                : types.some(
                  (type) => type.type.name === "fire" && "flying"
                )
              ? 'linear-gradient(90deg, #fd7d24 14.5%, #3dc7ef 14.5%, #3dc7ef 35%, #fff 00%)'
              : 'inherit',
                backgroundColor: types.some(
                  (type) => type.type.name === 'poison'
                )
                  ? '#b97fc9'
                  : types.some(
                      (type) => type.type.name === 'normal'
                    )
                  ? 'grey'
                  : types.some(
                    (type) => type.type.name === 'flying'
                  )
                ? '#3dc7ef'
                : types.some(
                  (type) => type.type.name === 'fire'
                )
              ? '#fd7d24'
              : types.some(
                (type) => type.type.name === 'water'
              )
            ? '#4592c4'
            : types.some(
              (type) => type.type.name === 'bug'
            )
          ? '#729f3f'
          : types.some(
            (type) => type.type.name === 'electric'
          )
        ? '#eed535'
        : types.some(
          (type) => type.type.name === 'fairy'
        )
      ? '#fdb9e9'
  : 'inherit',
              },
            }}>
            {typeHandler()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}