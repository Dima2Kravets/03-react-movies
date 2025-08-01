import css from "./App.module.css";
// import toast, { Toaster } from 'react-hot-toast';
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import { useState } from "react";
// const notify = () => toast.error('No movies found for your request.');
export default function App() {
const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);


    return (
      <div className={css.app} >
        
        <SearchBar onSubmit={() => { }} />
        <MovieGrid onSelect={()=>{}} movies={[]}/>
        <Loader />
        <ErrorMessage />
        <button onClick={openModal}>Open modal</button>
        {isModalOpen && <MovieModal onClose={closeModal} />}
    </div>
  );
}