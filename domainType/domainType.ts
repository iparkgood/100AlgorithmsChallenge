export function domainType(domains: string[]): string[] {
  return domains.map((domain) => {
    const lastWord = domain.slice(domain.lastIndexOf(".") + 1);
    return lastWord === "org"
      ? "organization"
      : lastWord === "com"
      ? "commercial"
      : lastWord === "net"
      ? "network"
      : "information";
  });
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
