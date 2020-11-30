using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace RobotStoreAPI.Models
{
    public class StoreDataContext: DbContext
    {
        public StoreDataContext(DbContextOptions<StoreDataContext> dbContextOptions) : base (dbContextOptions)
        {

        }

        public  DbSet<Robot> Robots { get; set; }
    }
}



