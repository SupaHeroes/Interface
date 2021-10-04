<script>
  import { goto } from "$app/navigation";

  import { onMount } from "svelte";
  import { sUser } from "@lib/auth";

  onMount(async () => {
    let user;
    sUser.subscribe((value) => {
      user = value;
    });
    // @ts-ignore
    if (user == null | user.attributes == null) goto("/");
  });
</script>

<slot />
