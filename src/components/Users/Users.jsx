import React from "react";
import {Paginator} from "./Paginator";
import {User} from "./User";

const Users = (props) => {

    return <div>
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
            currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        </div>
        {
            props.users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
            follow={props.follow} unfollow={props.unfollow} status={props.status}/>)
        }
    </div>
};

export default Users;