import Asisdebarre from '../components/Asisdebarre'
import { SearchBarre } from '../components/SearchBare'
import Barre from '../components/Barre'
import { BarreSong } from '../components/list-container-song'
import { CardContainer } from '../components/Card'
import { cards3, ListContainerSong } from '../utils/cards'


export default function SearchPage() {
  return (
    <div className="flex flex-col bg-gray-800 min-h-screen p-5">
        {/* AsideBar */}
        <Asisdebarre />
        {/* Search Bar */}
        <div className="mt-12">
            <SearchBarre />
        </div>
        {/* barre */}
       <div className="m-5 p-5 text-white">
       <Barre
            title="Recent searches"
            buttonText="Clear"
            buttonLink="/pages/resultat.tsx"
            />
       </div>
        {/* Recent search */}
        <div className="m-5 p">
            {ListContainerSong.map((song) => {
             return <BarreSong
              key={song.id}
              id={song.id}
              artist={song.artist}
              song={song.song}
              image={song.image}
              />
            })}
        </div>
        {/* Récommandations */}
        <div className="m-5 p-5 text-white">
            <Barre
            title="Basée sur ce que vous aimé"
            buttonText="Voir plus"
            buttonLink="/pages/recommandation.tsx"
            />
        </div>
        {/* Liste de chansons */}
        <div className="m-5 p">
          <CardContainer
          cards={cards3}
          />
        </div>
    </div>
  )
}


