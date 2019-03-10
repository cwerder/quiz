using System;
using Microsoft.EntityFrameworkCore;
namespace backend
{
    public class QuizContext: DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options): base(options)
        {

        }

        public DbSet<Models.Question> Questions { get; set; }
    }
}
