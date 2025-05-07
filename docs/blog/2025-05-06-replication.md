---
title: Replicating a Back Bet with a Portfolio of Lays
date: 2025-05-06
summary: In a perfectly efficient market, one back bet can be replicated using lay bets on all other runners.
---

# Replicating a Back Bet with a Portfolio of Lays

In a zero-spread, zero over-round market, backing one runner is mathematically identical to laying all others.

Let \( p_i \) be the true win probability for runner \( i \). With decimal odds \( O_i = \frac{1}{p_i} \), the lay stakes on all other runners \( j \ne i \) are:

$$
\text{Stake}_j = \frac{p_j}{1 - p_i}
$$

This creates a synthetically identical financial exposure — a perfect hedge.

---

## 📄 Downloads

- [PDF Version of this Post](/public/replication-paper.pdf)
- [Spreadsheet Example](/public/back-lay-replication.xlsx)
