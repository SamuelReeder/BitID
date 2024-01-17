# BitID
**BitID** is a blockchain built using Cosmos SDK and Tendermint consensus. It is intended to facilitate the creation and ownership of **Decentralized Identity Documents** [W3] (https://www.w3.org/TR/did-core/). Upon release, a native token will be offered on the chain to enable Proof-of-stake and as a fee for committing, updating, or deleting a DID. Moreover, the goal of BitID is to ensure every DID belong to a unique person. As such, offchain service providers will employ approved methods to prove a user is a unique, new addition to the blockchain. Fees will also be distributed to these offchain providers.

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts the blockchain in development.

### Configure

For development configuration, use `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

## Release
To release a new version, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make final changes from the release page and publish it.

### Install
To install the latest version of the blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/SamuelReeder/BitID@latest! | sudo bash
```
