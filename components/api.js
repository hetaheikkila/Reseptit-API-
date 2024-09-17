export default function fetchRepositories(ruoka) {

    return fetch(`${process.env.EXPO_PUBLIC_API_URL}?i=${ruoka}`)
    .then(response => {
      if (!response.ok)
        throw new Error("Error in fetch:" + response.statusText);

      return response.json()
    })

}