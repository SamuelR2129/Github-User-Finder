import React, { Fragment, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../spinner";
import { Link } from "react-router-dom";
import Repos from "../../repos/Repos";
import GithubContext from "../../../context/github/githubContext";

const User = () => {
  const params = useParams();
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
    //eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        back to search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location} </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            visit github
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong> Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong> Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong> website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary"> Followers: {followers}</div>
        <div className="badge badge-success"> following: {following}</div>
        <div className="badge badge-white"> public repos: {public_repos}</div>
        <div className="badge badge-dark"> public gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
