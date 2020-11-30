using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreDemoWebApi.Models
{
    public class StoreDemoContext  :DbContext
    {
        public StoreDemoContext(DbContextOptions<StoreDemoContext> options) : base(options)
        {

        }
        public DbSet<Robot> Robots { get; set; }
    }
}
