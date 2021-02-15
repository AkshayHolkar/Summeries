using Microsoft.AspNetCore.Mvc;
using Summeries.Data;

namespace Summeries.Controllers 
{
    [Route("api/[controller]")]
    public class BooksController: Controller
    {

        private IBookService _service;

        public BooksController(IBookService service)
        {
            _service = service;

        }
    }
}


