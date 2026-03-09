using Microsoft.EntityFrameworkCore
using backend.Models;

namespace backend.Data
{
    public class BowlingLeagueContext : DbContext
    {
        public BowlingLeagueContext(DbContextOptions<BowlingLeagueContext> options) : base(options)
        {
        }

        public DbSet<Bowler> Bowlers { get; set; }
    }
}