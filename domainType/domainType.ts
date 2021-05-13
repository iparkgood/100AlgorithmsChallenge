export function domainType(domains: string[]): string[] {
  return domains.map((domain) => {
    const words = domain.split(".");
    return words[words.length - 1] === "org"
      ? "organization"
      : words[words.length - 1] === "com"
      ? "commercial"
      : words[words.length - 1] === "net"
      ? "network"
      : "information";
  });
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
