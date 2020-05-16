import React from "react";
import {Paginator} from "./Paginator";
import {User} from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, follow, unfollow, status}) => {

    return <div>
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>
        </div>
        {
            users.map(u => <User user={u} key={u.id} followingInProgress={followingInProgress}
                                 follow={follow} unfollow={unfollow} status={status}/>)
        }
    </div>
};

export default Users;