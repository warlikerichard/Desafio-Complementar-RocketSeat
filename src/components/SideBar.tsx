import '../styles/sidebar.scss';
import { Button } from './Button';
import { MovieCard } from './MovieCard';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface Props{
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton(id:number): void;
}

export function SideBar(props: Props) {

  const genres = props.genres;
  const handleClickButton = props.handleClickButton;
  const selectedGenreId = props.selectedGenreId;

  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}