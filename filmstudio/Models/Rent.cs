using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace filmstudio.Models
{
    public class RentLog

    {

        public int Id { get; set; }

        public int FilmId { get; set; }

        public Film Film { get; set; }

        public int FilmStudioId { get; set; }

        public FilmStudio FilmStudio { get; set; }

        public DateTime ExpireDate { get; set; }



        public async Task<RentLog> CheckRental(MoviesForHireContext _context)

        {

            //Dont want to find a rental that the filmstudio has made on the specified movie 

            var rental = await _context.RentLogs

            .Where(x => x.FilmId == FilmId)

            .Where(x => x.FilmStudioId == FilmStudioId).FirstOrDefaultAsync();



            if (rental != null)

            {

                return null;

            }



            var movie = await _context.Movies

            .Where(x => x.Id == this.FilmId).FirstOrDefaultAsync();



            return movie.CheckAvailability() ? this : null;

        }



    }
}
