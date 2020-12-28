using System;
using System.Collections.Generic;

#nullable disable

namespace WebAPICore.Models
{
    /// <summary>
    /// Class Entity created by Scaffold command : 
    /// Scaffold-DbContext "Server=LAPTOP-3UL0ED8C\SQLEXPRESS02;Database=APICoreDB;User ID=user;Password=admin;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
    /// </summary
    public partial class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }
        public decimal? Salary { get; set; }
    }
}
