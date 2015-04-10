using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;

namespace signalr_browserify
{
    public class SbHub : Hub
    {
        public string NavigatingAsteroidField()
        {
            var quote =
                new KeyValuePair<string, string>(
                    "is approximately 3,720 to one.",
                    "https://www.google.com/#q=odds+of+successfully+navigating+an+asteroid+field"
                    );

            return JsonConvert.SerializeObject(quote);
        }
    }
}