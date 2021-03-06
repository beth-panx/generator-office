/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

(() => {
  // The initialize function must be run each time a new page is loaded
  Office.initialize = (reason) => {
    $(document).ready(() => {
      $('#run').click(run);
    });
  };

  async function run() {
    <% if (host === 'Outlook') { %>
    <%# Outlook doesn't expose Outlook.run(), so don't put that in %>
    /**
     * Insert your <%= host %> code here
     */
    <% } else { %>
    await <%= host %>.run(async (context) => {
      /**
       * Insert your <%= host %> code here
       */
      await context.sync();
    });
    <% } %>
  }
})();
