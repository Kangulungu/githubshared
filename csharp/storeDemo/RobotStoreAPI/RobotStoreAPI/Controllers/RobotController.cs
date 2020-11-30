using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RobotStoreAPI.Models;

namespace RobotStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RobotController : ControllerBase
    {
        private readonly StoreDataContext _context;

        public RobotController(StoreDataContext context)
        {
            _context = context;
        }

        // GET: api/Robot
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Robot>>> GetRobots()
        {
            return await _context.Robots.ToListAsync();
        }

        // GET: api/Robot/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Robot>> GetRobot(int id)
        {
            var robot = await _context.Robots.FindAsync(id);

            if (robot == null)
            {
                return NotFound();
            }

            return robot;
        }

        // PUT: api/Robot/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRobot(int id, Robot robot)
        {
            if (id != robot.RobotID)
            {
                return BadRequest();
            }

            _context.Entry(robot).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RobotExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Robot
        [HttpPost]
        public async Task<ActionResult<Robot>> PostRobot(Robot robot)
        {
            _context.Robots.Add(robot);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRobot", new { id = robot.RobotID }, robot);
        }

        // DELETE: api/Robot/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Robot>> DeleteRobot(int id)
        {
            var robot = await _context.Robots.FindAsync(id);
            if (robot == null)
            {
                return NotFound();
            }

            _context.Robots.Remove(robot);
            await _context.SaveChangesAsync();

            return robot;
        }

        private bool RobotExists(int id)
        {
            return _context.Robots.Any(e => e.RobotID == id);
        }
    }
}
