const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
const initialFacts = async () => {
  const data = await fetch(
    "https://vfbdjixdgfbnfpeetzbg.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmYmRqaXhkZ2ZibmZwZWV0emJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NDUzMjQsImV4cCI6MjAyMzAyMTMyNH0.KA0qaeNbsm-k9a5iiiq3H3b66SPD2znopVa6HIYcTp0",
        authorization:
          "Beare b6iZtxwZCOw7WEpaw3jik/Vg2rK4dkp5NCf73+jLyZhXzCR2h7xhbF1a1KMx28MJcpnj6eoWVqP5hnwEOCh2qw==",
      },
    }
  ).then((res) => {
    return res.json();
  });
  console.log(data);
  createHtml(data);
};
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factssList = document.querySelector(".facts-list");
factssList.innerHTML = "";
const createHtml = (listHtml) => {
  listHtml.map((el) => {
    factssList.innerHTML += `
    <li class="fact">
      <p>
        ${el.fact}
        <a href="${el.source}" target="_blank" class="source">
          (Source)
        </a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((category) => category.name == el.category).color
      };">
        ${el.category}
      </span>
      <div class="vote-buttons">
        <button>👍 ${el.voteInteresting} </button>
        <button>🤯 ${el.vodeMindBlowing}</button>
        <button>⛔️ ${el.voteFalse}</button>
      </div>
    </li>`;
  });
};
// createHtml(initialFacts);
initialFacts();

btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
