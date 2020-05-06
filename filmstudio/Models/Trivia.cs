using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace filmstudio.Models
{
	public class Trivia
	{
        public int Id { get; set; }

        public string TriviaText { get; set; }

        public int FilmId { get; set; }

        public Film Film { get; set; }

        public int FilmStudioId { get; set; }

        public FilmStudio FilmStudio { get; set; }
    }
}
